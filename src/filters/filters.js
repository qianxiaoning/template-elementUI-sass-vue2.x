//全局过滤器 第一个参数为过滤器之前
// 时间格式
const formatNumber=(n)=>{
    const str = n.toString()
    return str[1] ? str : `0${str}`
}
const formatTime=(date0,type)=>{
    date0 = date0.toString();
    let date = '';  
    if(date0){
      // 国际标准时间格式
      if(date0.indexOf('+')>-1||date0.indexOf('T')>-1){
        date = new Date(date0)
      }
      //简写时间格式，兼容ios转/
      else{      
        date = new Date(Number(date0.replace(/\-/g, "/")))
      }        
    }
    else{
      //当前时间
      if(date0==0){
        date = new Date();
      }
      //参数不存在
      else{
        return ''
      }        
    }

    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
  
    const hour = date.getHours()
    const minute = date.getMinutes()
    const second = date.getSeconds()
  
    const t1 = [year, month, day].map(formatNumber).join('-')
    const t2 = [hour, minute, second].map(formatNumber).join(':')
    const t3 = [hour, minute].map(formatNumber).join(':')
    if(type==undefined){
      return `${t1} ${t2}`
    }
    if(type==0){
      return `${t1}`
    }
    else if(type==1){
      return `${t3}`
    }
}    

export default{
    formatTime
}
