export interface totalStateInterface {
    search:string
    more:boolean
    sort: 'relevance' | 'newest'
    filter:'All' | 'Art' | 'Biography' | 'Computers' | 'History' | 'Medical' | 'Poetry'
    count:number
}