export interface ISqlTableRow {
    name: string
    datatype: string
    key?: boolean
    nullable?: boolean
}

export interface ISqlTable{
    name: string
    rows: ISqlTableRow[]
}