import { GETSTROYS, GETNOVELS } from './mutation-types.js'
import { setStore, getStore } from '../utils/storage'

export default {
    // 添加所有小说数据
    [GETSTROYS](state, storys) {
        state.storys = storys;
        setStore('storys',storys);
        console.log('storys:',storys);
    },
    // 添加所有文章数据
    [GETNOVELS](state, novels) {
        state.novels = novels
        setStore('novels',novels)
    }
}