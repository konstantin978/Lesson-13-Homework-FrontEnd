import axios from "axios";
import { ITodo } from "./types";

type InputTodo = Omit<ITodo, 'id'>

export const getAll = async (): Promise<ITodo[]> => {
    const response = await axios.get('http://localhost:3004/todos')
    return response.data
}

export const add = async (obj: InputTodo): Promise<ITodo> => {
    const response = await axios.post('http://localhost:3004/todos', obj)
    return response.data
}

export const remove = async (id: string): Promise<void> => {
    await axios.delete(`http://localhost:3004/todos/${id}`);
}

export const update = async (id: string, data: Partial<ITodo>): Promise<ITodo> => {
    const response = await axios.put(`http://localhost:3004/todos/${id}`, data);
    return response.data;
};