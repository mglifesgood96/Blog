<?php
class Tags
{
    private $conn;
    private $table_name = "tags";

    public $id;
    public $name;
    public $creation_date;
    public $modification_date;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    function read()
    {
        $query = "SELECT    
                *
            FROM
                " . $this->table_name;

        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }

    function add()
    {
        $query = "SELECT    
                *
            FROM
                " . $this->table_name;

        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }

    function update()
    {
        $query = "SELECT    
                *
            FROM
                " . $this->table_name;

        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }

    function delete()
    {
        $query = "DELETE FROM " . $this->table_name;

        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }
}