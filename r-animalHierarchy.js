function traverse(animalHierarchy, parent) {
  let node = {};
  animalHierarchy.filter(item => item.parent === parent)
                 .forEach(item => node[item.id] = traverse(animalHierarchy, item.id));
  return node;  
}

//best case: O(1), in instance of only 1 item to filter by
//worst case: O(n^(c)) c = size of parent; worst case dependent on the size of parent (4 parents, require 4 nested loops); and n is dependent on how many items