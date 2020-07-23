export interface IAction {
    type: string,
    payload: any
}


export type Reducer<T> = (state: T, action: IAction) => T
