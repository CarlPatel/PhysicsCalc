from flask import Flask, request, jsonify, make_response

app = Flask(__name__)
#app.secret_key = "asdf"



@app.route("/api/forces", methods=["GET"])


def forces():
    """
    link: www.api.com/api/forces?force=1&mass=2
    http://localhost:5000/api/forces?force=3&mass=2
    
    Force, mass, acceleration
    request.get("https://www.google.copm/maps)
    """

    force = request.args.get("force")
    mass = request.args.get("mass")
    accel = request.args.get("accel")
    

    numOfVariables = 0
    if force != None and force.isnumeric():
        force = int(force)
        numOfVariables += 1
    else:
        if force != None:
            return response(400, "You must enter a number")
    if mass != None and mass.isnumeric():
        if int(mass) > 0:
            mass = int(mass)
            numOfVariables += 1
        else:
            return response(400, "Your number must be greater than 0") #negitive gives a not a number error
    else:
        if mass != None:
            return response(400, "You must enter a number")
    if accel != None and accel.isnumeric():
        accel = int(accel)
        numOfVariables += 1
    else:
        if accel != None:
            return response(400, "You must enter a number")



    if numOfVariables == 2:
        if force==None:
            ans = accel*mass
            solvedFor="force"
        elif mass==None:
            ans = force/accel
            solvedFor="mass"
        elif accel==None:
            ans = force/mass
            solvedFor="accel"
        return response(200, ans, solvedFor)

    elif numOfVariables < 2:
        return response(400, "You need to fill in 2 variables")
    elif numOfVariables > 2:
        return response(400, "You can only have 2 variables filled in")
         

def response(code, data, var=None):
    if var == None:
        r = make_response(jsonify({"data": data}), code)
    else:
        r = make_response(jsonify({"data": data, "solvedFor": var}), code)

    r.headers["Content-Type"] = "application/json"
    return r



if __name__ == "__main__":
    app.run("localhost", 5000, debug=True)
    