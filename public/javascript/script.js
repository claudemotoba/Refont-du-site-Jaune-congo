const input = document.querySelector('.aa')
const controleplus = document.querySelector('.plusplus')
const moins = document.querySelector('.moins')

console.log(input.value);


moins.addEventListener('click', function () {
     input.value = input.value  - 1
    parseInt(input.value)
    
})

controleplus.addEventListener('click', function () {
    input.value++
   parseInt(input.value)
   
})