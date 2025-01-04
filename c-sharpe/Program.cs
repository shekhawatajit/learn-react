//int TotalStudents = 300;  //rollnumber of students will be 1001, 1002, 1003
string[] Students = ["Mx. A", "Mx. B", "Mx. C"];
int[] RollNumbers = [345, 346, 5675];
//couting starts from Zero

for (int studentId = 0; studentId < 3; studentId = studentId + 1)
{
    Console.WriteLine("Roll Number: " + RollNumbers[studentId] + " Student Name: " + Students[studentId]);
}
