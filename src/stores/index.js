import { ref,watch,computed } from 'vue'
import { defineStore } from 'pinia'

const changeLang = flag => {
  if(!flag){
    return {
      home:{
          search:'Search for a city or state',
          wrong:'Sorry, something went wrong, please try again.',
          NoResults:'No results match your query, try a different term.'
      },
      cityList:{
        hint:'No locations added. To start tracking a location, search in the field above.',
        high:'H:',
        low:'L:',
        units:'imperial',
        lang:'en',
      },
      cityCard:{
        high:'H:',
        low:'L:',
      },
      siteNav:{
        title:'The Local Weather',
        modal:{
          about:{
            title:'About:',
            text:'The Local Weather allows you to track the current and future weather of cities of your choosing.',
          },
          how:{
            title:'How it Works:',
            text1:'Search for your city by entering the name into the search bar.',
            text2:'Select a city within the results, this will take you to the current weather for your selection.',
            text3:'Track the city by clicking on the "+" icon in the top right. This will save the city to view at a later time on the home page.',
          },  
          remove:{
            title:'Removing a city:',
            text:'If you no longer wish to track a city, simply select the city within the home page. At the bottom of the page, there will be am option to delete the city.',
          }
        },
      },
      baseModal:{
        close:'Close',
      },
      asyncCity:{
        preview:'You are currently previewing this city, click the "+" icon to start tracking this city.',
        feelsLike:'Feels Like',
        HourlyWeather:{
          title:'Hourly Weather',
        },
        _7DayForecast:{
          title:'7 Day Forecast'
        },
        removeCity:'Remove City',
        timeForm:'en-us',
        high:'H:',
        low:'L:',
        units:'imperial',
        lang:'en',
      }
    }
  }else{
    return {
      home:{
          search:'搜尋城市',
          wrong:'抱歉，出錯了，請重試',
          NoResults:'沒有符合的結果，請試別的關鍵字',
      },
      cityList:{
        hint:'尚未有地區被添加。追縱地區天氣前請先搜尋',
        high:'高溫',
        low:'低溫',
        units:'metric',
        lang:'zh_tw',
      },
      cityCard:{
        high:'高溫',
        low:'低溫',
      },
      siteNav:{
        title:'當地天氣',
        modal:{
          about:{
            title:'關於',
            text:'你可以利用這個天氣app追縱選擇的城市的當前及未來天氣'
          },
          how:{
            title:'如何運作',
            text1:'在搜尋框搜尋想要找的城市名',
            text2:'從搜尋的結果中選擇一個想追縱的城市',
            text3:'點擊"+"圖示可以將該城市存於首頁利於追縱',
          },  
          remove:{
            title:'移除城市',
            text:'如果你不想再追縱該城市，就在該城市的天氣預覽頁面下點擊移除按鈕'
          }
        },
      },
      baseModal:{
        close:'關閉',
      },
      asyncCity:{
        preview:'你正在預覽當地的天氣，點擊"+"圖示可以追縱它',
        feelsLike:'體感溫度',
        HourlyWeather:{
          title:'及時天氣',
        },
        _7DayForecast:{
          title:'七日預測',
        },
        removeCity:'移除',
        timeForm:'zh-TW',
        high:'高溫',
        low:'低溫',
        units:'metric',
        lang:'zh_tw'
      }
    }
  }
}

export const useStore = defineStore('lang', () => {
  const flag = ref(true)
  const lang = ref(changeLang(flag.value))
  
  const switchLang = ()=> {
    flag.value=!flag.value
  }

  const toCelisius = temp => computed(()=>flag.value?Math.round((temp-32)/1.8):Math.round(temp))

  watch(flag,()=>{
    lang.value = changeLang(flag.value)
  })
  return { flag,lang,switchLang,toCelisius }
})
