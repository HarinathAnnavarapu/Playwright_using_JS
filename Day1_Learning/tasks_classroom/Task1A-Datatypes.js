let students=["Harinath","A",27,"Senior Automation Engineer"]

students[-1]="Human"

console.log(students[-1])
console.log("Before pushing "+students.length)

students.push("Senior Test Engineer")
console.log("After pushing "+students.length)

console.log(students[-1])

students.push(true)

console.log(typeof(students[0])+"--"+typeof(students[1])+"--"+typeof(students[2])+"--"+students[3]+"--"+typeof(students[4]))