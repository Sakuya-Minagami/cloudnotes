<template>
    <div class="notes">
        <button @click="navbarisShow=!navbarisShow" class="btn">≡</button><br/>
        <transition name="navbar">
            <navbar v-show="navbarisShow" class="navbar"></navbar>
        </transition>
        <button @click="isShow=true" class="add">+新增</button>
        
        <span>标题</span>
        <span>分类</span>
        <span>字数</span>
        <span>创建时间</span>
        <form class="writeNotes" v-for="(item,index) in datalist" :key="item.title">
            <span>{{item.title}}</span>
            <span>{{item.type}}</span>
            <span>{{item.text.length}}</span>
            <span>{{item.date}}</span>
            <span @click="handleEdit(index)" class="edit">编辑</span>
            <span @click="del(index)" class="edit">删除</span><br/>
        </form>
        <div id="overlay" v-show="isShow" @click="isShow=false">
            <div id="center" @click.stop>
                <div>标题<input type="text" v-model='preTitle' class="title" maxlength="30"></div>
                分类<select v-model="preType" class="type">
                    <option disabled value="">--请选择--</option>
                    <option>笔记</option>
                    <option>会议</option>
                </select>
                <div>内容</div><textarea type="text" v-model='preText' class="text" 
                maxlength="800" spellcheck="false"></textarea>
                <button @click="clear()" class="cancel">取消</button>
                <button @click="add()" class="enter">确定</button>
            </div>
        </div>

        <div id="overlay" v-show="editisShow" @click="editisShow=false">
            <div id="center" @click.stop>
                <div>标题<input type="text" v-model='editTitle' class="title"/></div>
                分类<select v-model="editType" class="type">
                    <option disabled value="">--请选择--</option>
                    <option>笔记</option>
                    <option>会议</option>
                </select>
                <div>内容</div><textarea type="text" v-model='editText' class="text"
                    maxlength="800" spellcheck="false"></textarea>
                <button @click="clearEdit()" class="cancel">取消</button>
                <button @click="edit()" class="enter">修改</button>
            </div>
        </div>
    </div>
</template>

<script>
    import navbar from '@/components/Navbar.vue'
    // Vue.component('sidebar', sidebar)
    export default {
        components: {
            navbar
        },
        data() {
            return {
                datalist: [],
                isShow: false,
                editisShow: false,
                navbarisShow: false,

                preTitle: '',
                preType: '',
                preText: '',
                editTitle: '',
                editType: '',
                editText: '',
                editDate: '',
                editIndex: 0,

            }
        },
        methods: {
            clear() {
                this.isShow = false
                this.preTitle = ''
                this.preType = ''
                this.preText = ''
            },
            add() {
                if (this.preTitle === '' || this.preType === '' || this.preText === '') {
                    alert("请把笔记写完整啦！(/≧▽≦)/")
                } else {
                    var date = new Date()
                    // notesDate = date.getFullYear + '/' + date.getMonth + '/' + date.getDay
                    var notes = {
                        title: this.preTitle,
                        type: this.preType,
                        text: this.preText,
                        date: date.getFullYear() + '/' + (date.getMonth()+1) + '/' + date.getDate()
                    }
                    this.datalist.push(notes)
                    this.clear()
                }

            },
            del(index) {
                var r = confirm('确定删除吗(ノへ￣、)')
                if (r) {
                    this.datalist.splice(index, 1)
                }
            },
            handleEdit(index) {
                this.editIndex = index
                this.editTitle = this.datalist[this.editIndex].title
                this.editType = this.datalist[this.editIndex].type
                this.editText = this.datalist[this.editIndex].text
                this.editDate = this.datalist[this.editIndex].date
                this.editisShow = true
            },
            edit() {
                var editNotes = {
                    title: this.editTitle,
                    type: this.editType,
                    text: this.editText,
                    date: this.editDate,
                }

                this.datalist.splice(this.editIndex, 1, editNotes)
                this.clearEdit()
            },
            clearEdit() {
                this.editTitle = '',
                    this.editType = '',
                    this.editText = '',
                    this.editDate = '',
                    this.editisShow = false
            },
            test() {
                var date = new Date()
                console.log(date.getHours())
            }
        }
    }
</script>

<style scoped>
    .notes {
        width: 750px;
        height: 500px;
        background-color: rgb(237, 235, 235);
        opacity: 80%;
    }

    #overlay {
        background-color: rgba(0, 0, 0, 0.6);
        width: 100%;
        margin: auto;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    #center {
        background-color: rgb(255, 255, 255);
        border-radius: 5px;
        padding-top: 15px;
        padding-left: 30px;
        padding-bottom: 15px;
        width: 600px;
        height: 350px;
        position: fixed;
        margin: auto;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
    }

    .text {
        height: 200px;
        width: 400px;
    }
    .title{
        height: 25px;
        
    }
    .type{
        height: 25px;
    }

    .btn{
        width: 66px;
        height: 30px;
        background-color: rgba(255, 0, 195, 0.295);
        /* border: 0px; */
    }
    .btn:hover{
        background-color: rgb(255, 0, 238);
    }
    .add{
        background-color: rgba(0, 255, 255, 0.231);
        color: blue;

    }
    .add:hover{
        background-color: aqua;
    }
    .writeNotes{
        background-color: white;
    }
    .cancel{
        width: 50px;
        height: 30px;
        background-color: white;
    }
    .enter{
        width: 50px;
        height: 30px;
        background-color: rgb(64, 158, 255);
        color: white;
    }
    .enter:hover{
        background-color: rgb(54, 134, 214);
    }
    .edit{
        color:rgb(129,129,222) ;
    }
    span{
        display:inline -block;
        width: 100px;
        float:left;
        
    }
    
</style>