<?php
    function page_name_genertator($sText)
    {
        $aReplacePL = array(' ' => '_', 'ą' => 'a', 'ę' => 'e', 'ś' => 's', 'ć' => 'c', 'ó' => 'o', 'ń' => 'n', 'ż' => 'z', 'ź' => 'z', 'ł' => 'l', 'Ą' => 'A', 'Ę' => 'E', 'Ś' => 'S', 'Ć' => 'C', 'Ó' => 'O', 'Ń' => 'N', 'Ż' => 'Z', 'Ź' => 'Z', 'Ł' => 'L');
        return strtolower(str_replace(array_keys($aReplacePL), array_values($aReplacePL), $sText));
    }
?>