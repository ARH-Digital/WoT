<?php 

echo $_SERVER[‘SERVER_SOFTWARE’];

function serverOS()
{
    $sys = strtoupper(PHP_OS);
 
    if(substr($sys,0,3) == "WIN")
    {
        $os = 1;
    }
    elseif($sys == "LINUX")
    {
        $os = 2;
    }
    else
    {
        $os = 3;
    }
 
    return $os;
}

$test = serverOS();

echo $test;

?>