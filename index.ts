


import inquirer from "inquirer"
let  toDoList:string [] = [];
let whileCondition :boolean = true;
while(whileCondition === true){
    //--------------options---------//
    let option = await inquirer.prompt([{
        type:"list",
        name:"userOption",
        message:"select an option",
        choices:['Add','remove']
    }])
    //---------------------------------Add-------------------------//
    if(option.userOption === 'Add'){
        let ans = await inquirer.prompt([{
            type:"input",
            name:"userAns",
            message:"write some thing to add in the task list"
        }])

        if(ans.userAns !== ''){
            toDoList.push(ans.userAns);
            console.log(toDoList);

        }else{
            console.log('Please write some thing to add in to do list:')
        }    

    }
    //---------------------remove-------------------//
    else if (option.userOption === 'remove'){
        let removeChoice = await inquirer.prompt([{
            type:"list",
            name:"removeItem",
            message:'select item to remove:',
            choices:toDoList
        }]);
        let indexToRemove = toDoList.indexOf(removeChoice.removeItem);
        if(indexToRemove >= 0){
            toDoList.splice(indexToRemove , 1);
            console.log('you remove:', removeChoice.removeItem);
            console.log(toDoList);
        }

                    }
                    //------------------confirm-------------//
                    let userAns =await inquirer.prompt([{
                        type:"confirm",
                        name:"selection",
                        message:"Do you want to continue?",
                        default:true
                    }])
                    if(userAns.selection === false){
                        whileCondition = false;
                    }
    }
    console.log(`Thank you for using to do list`)


    
