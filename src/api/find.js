import axios from '../utils/axios';

/**
 * @description 获取 banner ( 轮播图 )
 * @param { Number } timestamp - 防止接口缓存
 * @param { Number } type - 资源类型，0: pc, 1: android, 2: iphone, 3: ipad
 */
export const bannerImg = () => {
  const params = {
    timestamp: new Date().getTime(),
    type: 1
  };
  return axios.request({
    url: '/banner',
    method: 'get',
    params
  });
};

/* @description 获取推荐歌单
 * @param { Number } timestamp - 防止接口缓存
 * @param { Number } limit - 条数，可选
 */
export const recommendSongList = ({ limit }) => {
  const params = {
    timestamp: new Date().getTime(),
    limit
  };
  return axios.request({
    url: '/personalized',
    method: 'get',
    params
  });
};
