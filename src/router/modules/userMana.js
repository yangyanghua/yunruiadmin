import userlist from '@/modules/userMana/components/userlist/index.vue';
import userdetail from '@/modules/userMana/components/userlist/detail.vue';
export default [
	{path: 'userlist',component: userlist,name:'用户列表'},
	{path: 'userdetail',component: userdetail,name:'用户详情',hidden:true},
];
