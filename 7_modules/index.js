// показать не получится т.к. нужно настроить webpack который позволит соединять модули

//класический синтаксис
//import {COLOR, compute} from './module'
// console.log(COLOR);

// MyLog Это про default.  здесь деструктуриз юзается
import MyLog, { COLOR, compute } from "./module";
compute(1, 2);
console.log(COLOR);
MyLog.log();

//можно импортировать все
//import * as Module from './module'
//и уже обращаться к дефолтным как Module.default
