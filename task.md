# Task

## 1.

Write a function `groupById`, that will take an array of objects and return a map, where keys are values of these objects `id` fields.

All `id`'s are assumed to be unique (no need to check for it) and can be either string of number.

Function must be type-safe

Alias the returned type - it should be obvious it is objects of certain type, grouped by their by `id`.

## 2.

Write a function `groupByKey`, that will take an array of objects and key name as second argument, and return a map of these objects, grouped by this property value.

It is assumed this property values can coincide, so the resulting map should have collections of the objects as its values.

the function should be type-safe

### advanced

Created a type alias, that will allow you to keep in the resulting type the information about exact property name that was used to group the objects
