function formatDate(date) {
    const options = { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit' };
    return date.toLocaleDateString(undefined, options);
  }
  
  function dateDifference(startDate, endDate) {
    const timeDiff = endDate - startDate;
  
    const seconds = Math.floor((timeDiff / 1000) % 60);
    const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
    const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  
    return {
      days,
      hours,
      minutes,
      seconds
    };
  }
  
  function updateDifference(startDate, endDate) {
    const difference = dateDifference(startDate, endDate);
  
    console.clear();
    var d=difference.days;
  var h=difference.hours;
  var m=difference.minutes;
  var s=difference.seconds;
  document.getElementById("day").innerHTML=d;
  document.getElementById("hour").innerHTML=h;
  document.getElementById("minute").innerHTML=m;
  document.getElementById("second").innerHTML=s;
  }
  
  const startDate = new Date();
  const endDate = new Date('2023-09-18T00:00:00');
  
  updateDifference(startDate, endDate);
  
  setInterval(() => {
    const now = new Date();
    updateDifference(now, endDate);
  }, 1000);
  