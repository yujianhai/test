import Mock from 'mockjs'
import fanpaiqi from './fanpaiqi.json'
Mock.mock('getapi/fanpaiqi','get',fanpaiqi)