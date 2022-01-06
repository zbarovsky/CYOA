/* 
File will hold graph logic for game progression
*/

// type Adjacency = {
//     nodes: object
// }

// type Graph = {
//     [index: number]: Adjacency
// }


let testGraph: {id: number, nodes: object}[] = [
    /* 0 */ {id: 0, nodes: [1]},
    /* 1 */ {id: 1, nodes: [0,2,3,4]},
    /* 2 */ {id: 2, nodes: [1,5,6,7]},
    /* 3 */ {id: 3, nodes: [1,8]},
    /* 4 */ {id: 4, nodes: [1, 7]},
    /* 5 */ {id: 5, nodes: [2, 9]},
    /* 6 */ {id:6, nodes: [2, 9]},
    /* 7 */ {id: 7, nodes: [2, 4, 10]},
    /* 8 */ {id: 8, nodes: [3, 10]},
    /* 9 - lose */ {id: 9, nodes: [5,6,7]},
    /* 10 - win */{id: 10, nodes: [7,8]}
]



function traverse(id: number) {
    return testGraph[id].nodes
}