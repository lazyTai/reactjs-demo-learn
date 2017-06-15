##目的
1.状态改变 -> 构建新的 DOM 元素更新页面

```angular2html
 class LikeButton {
    constructor () {
      this.state = { isLiked: false }
    }

    setState (state) {
      this.state = state
      this.el = this.render()
    }

    changeLikeText () {
      this.setState({
        isLiked: !this.state.isLiked
      })
    }

    render () {
      this.el = createDOMFromString(`
        <button class='like-btn'>
          <span class='like-text'>${this.state.isLiked ? '取消' : '点赞'}</span>
          <span>👍</span>
        </button>
      `)
      this.el.addEventListener('click', this.changeLikeText.bind(this), false)
      return this.el
    }
  }
```


##issue
没有修改到el的内容（html+event）  
把旧的删除，添加新的
```angular2html
 setState(state){
 +          var oldEl=this.el;
 +          document.querySelector('.wrapper').removeChild(oldEl)
            this.state=state;
            this.el=this.render()
 +          document.querySelector('.wrapper').appendChild(this.el)
}
```

##总结  
修改状态都要用setState()  
这个方法回触发修改dom