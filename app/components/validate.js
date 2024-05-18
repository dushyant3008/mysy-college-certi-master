export function validate(jsonObj) {
    for (let key in jsonObj) {
      if (jsonObj.hasOwnProperty(key)) {
        if (jsonObj[key] === null || jsonObj[key] === undefined || jsonObj[key] === '') {
          console.log(`Field '${key}' is not filled.`);
          return false
          // You can return false here if you want to stop checking after the first empty field
        } else {
          console.log(`Field '${key}' is filled with value: ${jsonObj[key]}`);
        }
      }
    }
    return true
  }