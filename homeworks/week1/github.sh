#!/bin/bash

curl -s https://api.github.com/users/$1 | 
   awk -F '"' '
   /\"name\":/ { print "使用者名稱: "$4} 
   /\"bio\":/ { print "簡介: "$4} 
   /\"location\":/ { print "居住地點: "$4}
   /\"blog\":/ { print "部落格: "$4}'
