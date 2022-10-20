import Mock from 'mockjs'
import fanpaiqi from './fanpaiqi.json'
import worldJson from './worldMap.json'
import earthData from './earth'
Mock.mock('/getapi/fanpaiqi','get',fanpaiqi)
Mock.mock('/getapi/earthData', 'get', () => Mock.mock(earthData))
Mock.mock('/getapi/worldmap', 'get', worldJson)