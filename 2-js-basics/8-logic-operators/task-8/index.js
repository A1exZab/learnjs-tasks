if (-1 || 0) alert('first')
// -1 || 0 вернет -1, поэтому alert выполняется

if (-1 && 0) alert('second')
// -1 && 0 вернет 0, поэтому alert не выполнится

if (null || (-1 && 1)) alert('third')
// null || (-1 && 1) вернет 1, поэтому alert выполнится

// По итогу выведется first, third
