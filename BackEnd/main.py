from flask import Flask, request, jsonify, make_response, json
import math

app = Flask(__name__)
#app.secret_key = "asdf"

@app.route("/api", methods=["GET"])



def unit():
    """
    link: www.api.com/api?force=1&mass=2
    http://localhost:5000/api?unit=kinomatics&final%20velocity=3&displacement=3&initial%20velocity=-4
    http://localhost:5000/api?unit=forces&acceleration=2&force=3
    http://localhost:5000/api?unit=gravitation&mass1=2&radius=3&mass2=5

    https://physicscatalyst.com/calculators/physics/kinematics-calculator.php
    """
    global file, unit
    unit = request.args.get("unit")

    with open('/Users/Carl/Storage/CompSci/Polygence/PhysicsCalc/BackEnd/Equations.json') as f:
        file = json.load(f)
    file = file[unit]

    if unit == "kinomatics":
        return kinomatics()
    else:
        return only1Ans()



def only1Ans():

    variables = file["variables"]["type"]
    numOfVariables = 0
    variableDict = {}

    for i,j in variables.items():

        globals()[j] = request.args.get(i)
        if (globals()[j]=="null"):
            globals()[j]=None

        variableDict[i] = ((globals()[j]))

        if globals()[j] != None and (globals()[j].isnumeric() or (globals()[j][1:].isnumeric() and globals()[j][0] == "-")):
            globals()[j] = (float(globals()[j]))
            variableDict[i] = (float(globals()[j]))
            numOfVariables += 1
        else:
            if globals()[j] != None:
                return response(400, "You must enter a number")


    necessaryNumOfVariables = file["variables"]["necessary"]


    if numOfVariables == necessaryNumOfVariables:
        for i in variableDict:
            if variableDict[i]==None:
                subject=[i]
                break


        try:
            ans = (eval(getEquation(subject)[0]))
            if ans < 0.0001 and not ans == 0:
                ans = "{:.4e}".format(ans)
        except:
            return response(400,"Error")


        return response(200, format(subject[0], ans, getEquation(subject),EquationWithNumbers(subject)))

    elif numOfVariables < necessaryNumOfVariables:
        return response(400, "You need to fill in " + str(necessaryNumOfVariables) + " variables")
    elif numOfVariables > necessaryNumOfVariables:
        return response(400, "You can only have " + str(necessaryNumOfVariables) + " variables filled in")
    return response(200, variableDict)



def kinomatics():
    
    variables = file["variables"]["type"]
    numOfVariables = 0
    variableDict = {}

    for i,j in variables.items():

        globals()[j] = request.args.get(i)
        variableDict[i] = ((globals()[j]))

        if globals()[j] != None and (globals()[j].replace(".","").isnumeric() or (globals()[j][1:].replace(".","").isnumeric() and globals()[j][0] == "-")):
            globals()[j] = (float(globals()[j]))
            variableDict[i] = (float(globals()[j]))
            numOfVariables += 1
        else:
            if globals()[j] != None:
                return response(400, "You must enter a number")

    
    necessaryNumOfVariables = file["variables"]["necessary"]


    if numOfVariables == necessaryNumOfVariables:
        for i in variableDict:
            if variableDict[i]==None:
                subject=[i]
                break
        for i in variableDict:
            if i != subject[0] and variableDict[i]==None:
                without=[i]
                break
        subject.append(without[0])
        without.append(subject[0])

        try:
            ans1 = round(eval(getEquation(subject,without)[0]),3)
        except:
            ans1 = "Error"
        try: 
            ans2 = round(eval(getEquation(subject,without)[1]),3)
        except:
            ans2 = "Error"


        #return response(200, variableDict)

        return response(200, format(subject[0], ans1, getEquation(subject,without),EquationWithNumbers(subject,without), subject[1], ans2))

    elif numOfVariables < necessaryNumOfVariables:
        return response(400, "You need to fill in " + str(necessaryNumOfVariables) + " variables")
    elif numOfVariables > necessaryNumOfVariables:
        return response(400, "You can only have " + str(necessaryNumOfVariables) + " variables filled in")
         




def getEquation(subject, without=None):
    equations = file["equations"]
    if unit == "kinomatics":
        return [equations[subject[0]][without[0]],equations[subject[1]][without[1]]]
    else:
        return [equations[subject[0]]]


def EquationWithNumbers(subject, without=None):
    variables = file["variables"]["type"]
    if unit == "kinomatics":
        Equations = getEquation(subject,without)
    else:
        Equations = getEquation(subject)


    for k in range(len(Equations)):
        if "math.sqrt" in Equations[k]:
            equation = Equations[k].split("math.sqrt")
            for i in range(len(equation)):
                for j in variables.values():
                    equation[i] = equation[i].replace(j,str(eval(j)))
            Equations[k] = "math.sqrt".join(equation)

        else:
            for i in range(len(Equations)): 
                for j in variables.values():
                    Equations[i] = Equations[i].replace(j,str(eval(j)))


    return Equations


def format(solvedFor1, ans1, equation, equationwithnumbers, solvedFor2=None, ans2=None):
    if unit == "kinomatics":
        return jsonify({
            "Status":"success",
            "Answers":{solvedFor1: ans1, solvedFor2: ans2},
            "Equations":{solvedFor1:equation[0],solvedFor2:equation[1]},
            "Equations with Numbers":{solvedFor1:equationwithnumbers[0],solvedFor2:equationwithnumbers[1]},
            })
    else:
        return jsonify({
            "Status":"success",
            "Answer":{solvedFor1: ans1},
            "Equation":{solvedFor1:equation[0]},
            "Equation with Numbers":{solvedFor1:equationwithnumbers[0]},
            })


def response(code, data):
    if code == 400:
        r = make_response(jsonify({"Status":"fail","Error": data}), code)
    else:
        r = make_response(data, code)

    r.headers["Content-Type"] = "application/json"
    return r



if __name__ == "__main__":
    app.debug = True
    app.run("localhost", 5000)
    