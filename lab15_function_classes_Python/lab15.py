"""
Justen Jiang 
Tuesday, June 25
"""

# define a function that takes two numbers and return the sum of them
def addition(x, y):
    return x+y

# calling function addition()
result = addition(2,3)
print(result)
print(addition(8,-10))

# define a function to calculate teh area of a rectangle using the length and the width 
def arearectangle(length, width):
    return length*width

# calling function arearectangle()
print(f"The area of a rectangle is {arearectangle(3,4)}")

# define a function to check if a number is positive, negative, or zero
def sign(x):
    try:
        if (x > 0):
            return "positive"
        elif(x < 0):
            return "negative" 
        else:
            return "zero (0)"
    except:
        return "undefined"



print(f"The number, 5, is {sign(5)}")
print(f"The number, 0, is {sign(0)}")
print(f"The number, -5, is {sign(-5)}")
print(f"The word, Justen, is {sign("Justen")}")


# define a function that checks if a number is even
def even(y):
    try:
        if (y%2 == 0):
            return True
        else:
            return False
    except:
        return "ERROR"


print(f"23 is an even number. {even(23)}")
print(f"4 is an even number. {even(4)}")
print(f"0 is an even number. {even(0)}")
print(f"Justen is an even number. {even("Justen")}")



print("\n ========== CLASSES ==========")
class MyClass: 
    # attribute/property (variable)
    i = 12345 

    #method (function)
    def testing(self):
        return "Hello World!"
    

# calling class MyClass 
# step !) create the instance class property 
newclass = MyClass()

#step 2) call the instance class property
instanceproperty = newclass.i

#step 3) call the instance class method 
instancemethod = newclass.testing()

# print
print(newclass)
print(f"Instance class property: {instanceproperty}")
print(f"Instance class method: {instancemethod}")


print("\n ========== CAR CLASS EXAMPLE ==========")
class Car: 
    # initiatiation object 
    def __init__(self, make, model, year):
        self.make = make 
        self.model = model 
        self.year = year 
        self.odometer_reading = 0

    # method to return the information of the car 
    def get_descriptive_car(self):
        return (f"{self.year}, {self.make}, {self.model}")

# create an instance of the class Car
newcar = Car("Audi", "a4", 2020)

# access method get_descriptive_car
car_description = newcar.get_descriptive_car()
print(car_description)