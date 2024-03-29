# Hashtables

In computing, a hash table, also known as hash map, is a data structure that implements an associative array or dictionary, an abstract data type that maps keys to values. 


## Challenge

Implement a Hashtable Class with the following methods:

**set**

Arguments: key, value

Returns: nothing

This method should hash the key, and set the key and value pair in the table, handling collisions as needed.

Should a given key already exist, replace its value from the value argument given to this method.

**get**

Arguments: key

Returns: Value associated with that key in the table

**contains**

Arguments: key

Returns: Boolean, indicating if the key exists in the table already.

**keys**

Returns: Collection of keys

**hash**

Arguments: key

Returns: Index in the collection for that key


## Approach & Efficiency

**Time**: O(1)

**Space**: O(n)