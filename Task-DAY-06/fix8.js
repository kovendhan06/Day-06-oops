//Fix the code to welcome the Employee
let login = 'Employee';
let message = (login == 'Employee') ?'welcome the Employee' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
console.log(message);