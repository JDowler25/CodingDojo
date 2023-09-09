<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!-- c:out ; c:forEach etc. --> 
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<!-- Formatting (dates) --> 
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"  %>
<!-- form:form -->
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!-- for rendering errors on PUT routes -->
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Omikuji Form</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/main.css"> <!-- change to match your file/naming structure -->
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/js/app.js"></script><!-- change to match your file/naming structure -->
</head>
<body>
    <h1>Omikuji Form</h1>
    <form action="/handleForm" method="post">
        <label for="number">Pick any number from 5 to 25</label>
        <input type="number" id="number" name="number" min="5" max="25"><br><br>

        <label for="city">Enter the name of any city</label>
        <input type="text" id="city" name="city"><br><br>

        <label for="person">Enter the name of any real person</label>
        <input type="text" id="person" name="person"><br><br>

        <label for="profession">Enter professional endeavor or hobby</label>
        <input type="text" id="profession" name="profession"><br><br>

        <label for="livingThing">Enter any type of living thing</label>
        <input type="text" id="livingThing" name="livingThing"><br><br>

        <label for="message">Say something nice to someone</label>
        <textarea name="message" id="message" cols="40" rows="5"></textarea><br><br>

        <input type="submit" value="send">
    </form>
</body>
</html>

