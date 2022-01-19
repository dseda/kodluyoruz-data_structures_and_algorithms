# Veri Yapıları ve Algoritmalar Egzersizleri

## [Insertion Sort](https://app.patika.dev/moduller/veri-yapilari-ve-algoritmalar/insertion-sort-proje)

**Birinci array: [22,27,16,2,18,6]**

- AŞAMA 1 : 22, 27, 16, 2, 18, 6
- AŞAMA 2 : 16, 22, 27, 2, 18, 6
- AŞAMA 3 : 2, 16, 22, 27, 18, 6
- AŞAMA 4 : 2, 16, 18, 22, 27, 6
- AŞAMA 5 : 2, 6, 16, 18, 22, 27

Big-O gösterimi : O(N^2)

Best case: O(N)

Worst Case: O(N^2)

Average case: O(N^2)

18 sayısı 4. aşamada insert edilir

**İkinci array: [7,3,5,8,2,9,4,15,6]**

İkinci arrayin insertion sortta ilk dört aşaması:

- AŞAMA 1 : 3, 7, 5, 8, 2, 9, 4, 15, 6
- AŞAMA 2 : 3, 5, 7, 8, 2, 9, 4, 15, 6
- AŞAMA 3 : 3, 5, 7, 8, 2, 9, 4, 15, 6
- AŞAMA 4 : 2, 3, 5, 7, 8, 9, 4, 15, 6

## [Merge Sort](https://app.patika.dev/moduller/veri-yapilari-ve-algoritmalar/merge-sort-proje)

**Sıralanmak istenen array: [22,27,16,2,18,6]**

Big-O gösterimi : O(N LOG N)

Best case: O(N LOG N)

Worst Case: O(N LOG N)

Average case: O(N LOG N)

Arrayin merge sortta 5 aşaması:

- AŞAMA 1 : 11, 21
- AŞAMA 2 : 11, 16, 21
- AŞAMA 3 : 12, 22
- AŞAMA 4 : 8, 12, 22
- AŞAMA 5 : 8, 11, 12, 16, 21, 22

## [Binary Search Tree](https://app.patika.dev/moduller/veri-yapilari-ve-algoritmalar/binary-search-tree-proje)

**Search edilen array: [7, 5, 1, 8, 3, 6, 0, 9, 4, 2]**

Root yukarıdaki arrayden rasgele seçilir. Daha sonra array içindeki elemanlar teker teker tree'ye eklenir. Output aşağıdaki gibidir.

7 is the root node of the binary tree
Node {
data: 5,
left: Node {
data: 1,
left: Node { data: 0, left: null, right: null },
right: Node { data: 3, left: [Node], right: [Node] }
},
right: Node { data: 6, left: null, right: null }
}
Node {
data: 1,
left: Node { data: 0, left: null, right: null },
right: Node {
data: 3,
left: Node { data: 2, left: null, right: null },
right: Node { data: 4, left: null, right: null }
}
}
Node {
data: 8,
left: null,
right: Node { data: 9, left: null, right: null }
}
Node {
data: 3,
left: Node { data: 2, left: null, right: null },
right: Node { data: 4, left: null, right: null }
}
Node { data: 6, left: null, right: null }
Node { data: 0, left: null, right: null }
Node { data: 9, left: null, right: null }
Node { data: 4, left: null, right: null }
Node { data: 2, left: null, right: null }

Binary Tree Illustration

           7
         /  \
       5     8
     /   \     \
    1     6     9

/ \
 0 3
/ \
 2 4
