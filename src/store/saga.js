// import { takeEvery } from 'redux-saga'
import { call, put, takeEvery } from 'redux-saga/effects'

console.log(takeEvery);

// 一个工具函数：返回一个 Promise，这个 Promise 将在 1 秒后 resolve
export const delay = ms => new Promise(resolve => setTimeout(() => { resolve('码代码'); }, ms))

export function* helloSaga() {
  yield delay(1000)
  console.log('hello');
}

// Our worker Saga: 将异步执行 increment 任务
export function* addTodoAsync() {
  console.log(23434);
  const text = yield call(delay, 1000);
  console.log(text);
  yield put({ type: 'ADD_TODO', text, });
}

// Our watcher Saga: 在每个 INCREMENT_ASYNC action 调用后，派生一个新的 incrementAsync 任务
export function* watchAddTodoAsync() {
  console.log(1232323);
  yield takeEvery('ADD_TODO_ASYNC', addTodoAsync)
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield [
    helloSaga(),
    watchAddTodoAsync()
  ]
}