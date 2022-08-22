<template>
    <div class="navbar">
        <ul>
            <li><router-link to="/homepage" class="which">主页</router-link></li>
            <li><router-link to="/notes" class="which">笔记管理</router-link></li>
            <li><router-link to="/groups" class="which">分组管理</router-link></li>
            <li><router-link to="/center" class="which">个人信息</router-link></li>
        </ul>
    </div>
</template>

<style>
    @keyframes slide {
        0% {
            apacity: 0;
            transform: translateX(-100%)
        }

        100% {
            apacity: 1;
            transform: translateX(0px);
        }
    }
    .navbar-enter-active{
        animation: slide 1s;
    }
    .navbar-leave-active{
        animation: slide 1s reverse;
    }
    .navbar {
        width: 66px;
        height: 570px;
        background-color: rgba(255, 0, 255, 0.066);
        float: left;
    }
    ul{
        padding:0px;
        margin:0px;
    }
    li{
        padding-top: 15px;
        color: antiqewhite;
        list-style: none;
    }
    .which{
        text-decoration: none;
    }
    .which:hover{
        color:blueviolet;
        
    }
    
</style>