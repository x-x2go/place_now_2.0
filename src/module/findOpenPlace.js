const findIsOpen =(periods, searchTime)=> {
    const currentTime = new Date();
    const dayOfWeek = currentTime.getDay();
  
    for (let i = 0; i < periods.length; i++) {
      //예외: 24시간 영업 시
      if (!periods[i].close) return true;
      if (periods[i].open.day === dayOfWeek) {
        let openTime = Number(periods[i].open.time);
        let closeTime = Number(periods[i].close.time);
  
        if (openTime > closeTime) {
          // 예외: 새벽까지 영업 시
          if (openTime <= searchTime || searchTime <= closeTime) return true;
        } else {
          if (openTime <= searchTime && searchTime <= closeTime) return true;
        }
        return false;
      }
    }

    return false;
  }

  export default findIsOpen;