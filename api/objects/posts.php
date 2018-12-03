<?php
class Post
{
    private $conn;
    private $table_name = "posts";
 
    public $id;
    public $id_tag;
    public $id_category;
    public $title;
    public $description;
    public $img_baner;
    public $status;
    public $page_name;
    public $creation_date;
    public $modification_date;
 
    public function __construct($db)
    {
        $this->conn = $db;
    }

    function readAdm()
    {
        $query = "SELECT posts.id, posts.id_tag, categories.name AS category, posts.title, statuses_posts.name AS status, posts.page_name, posts.creation_date, posts.modification_date
            FROM
                " . $this->table_name . " " .
                "LEFT JOIN statuses_posts ON posts.status = statuses_posts.id"." ".
                "LEFT JOIN categories ON posts.id_category = categories.id";

        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }

    function readOneById(){
        $query = "SELECT *
            FROM
                " . $this->table_name . " " .
                "WHERE id = :id";

        $stmt = $this->conn->prepare($query);
        $this->id = htmlspecialchars(strip_tags($this->id));
        $stmt->bindParam(':id', $this->id);
        $stmt->execute();
        return $stmt;
    }

    function create()
    {
        $query = "INSERT INTO
                " . $this->table_name . "
            SET
                title=:title, page_name=:page_name, description=:description, id_category=:id_category, id_tag=:id_tag, status=:status";

        $stmt = $this->conn->prepare($query);

        $this->title = htmlspecialchars(strip_tags($this->title));
        $this->page_name = htmlspecialchars(strip_tags($this->page_name));
        $this->description = htmlspecialchars(strip_tags($this->description));
        $this->id_category = htmlspecialchars(strip_tags($this->id_category));
        $this->id_tag = htmlspecialchars(strip_tags($this->id_tag));
        $this->status = htmlspecialchars(strip_tags($this->status));

        $stmt->bindParam(":title", $this->title);
        $stmt->bindParam(":page_name", $this->page_name);
        $stmt->bindParam(":description", $this->description);
        $stmt->bindParam(":id_category", $this->id_category);
        $stmt->bindParam(":id_tag", $this->id_tag);
        $stmt->bindParam(":status", $this->status);

        if ($stmt->execute()) {
            return true;
        }
        return false;
    }

    function update()
    {
        $query = "UPDATE
                " . $this->table_name . "
            SET
                name = :name,
                price = :price,
                description = :description,
                category_id = :category_id
            WHERE
                id = :id";
 
        $stmt = $this->conn->prepare($query);
 
        $this->name = htmlspecialchars(strip_tags($this->name));
        $this->price = htmlspecialchars(strip_tags($this->price));
        $this->description = htmlspecialchars(strip_tags($this->description));
        $this->category_id = htmlspecialchars(strip_tags($this->category_id));
        $this->id = htmlspecialchars(strip_tags($this->id));
 
        $stmt->bindParam(':name', $this->name);
        $stmt->bindParam(':price', $this->price);
        $stmt->bindParam(':description', $this->description);
        $stmt->bindParam(':category_id', $this->category_id);
        $stmt->bindParam(':id', $this->id);

        if ($stmt->execute()) {
            return true;
        }
        return false;
    }

    function delete()
    {
        $query = "DELETE FROM " . $this->table_name . " WHERE id = ?";
        $stmt = $this->conn->prepare($query);
        $this->id = htmlspecialchars(strip_tags($this->id));
        $stmt->bindParam(1, $this->id);
        if ($stmt->execute()) {
            return true;
        }
        return false;
    }
}