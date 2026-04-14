<?php
echo "<h1>File Listing</h1><pre>";
function listFiles($dir, $indent = "") {
    $files = scandir($dir);
    foreach ($files as $file) {
        if ($file === "." || $file === "..") continue;
        echo $indent . $file . (is_dir("$dir/$file") ? "/" : "") . "\n";
        if (is_dir("$dir/$file") && $indent === "") {
            listFiles("$dir/$file", $indent . "  ");
        }
    }
}
listFiles(dirname(__DIR__) . "/public/build");
echo "</pre>";
die();
