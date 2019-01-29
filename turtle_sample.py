import turtle

t = turtle.Turtle()
screen = turtle.Screen()
screen.bgcolor("#90EE8F")
t.shape('turtle')
t.pensize(2)
t.color('blue')
t.stamp()



for i in range(12):
    t.penup()
    t.forward(100)
    t.pendown()
    t.forward(10)
    t.penup()
    t.forward(10)
    t.stamp()
    t.right(180)
    t.forward(120)
    t.right(30)
    

screen.exitonclick()

input()