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
    <title>burgers</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/main.css"> <!-- change to match your file/naming structure -->
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/js/app.js"></script><!-- change to match your file/naming structure -->
</head>
<body>
    <h1>Burgers Tracker</h1>
    <table>
        <thead>
            <tr>
                <th>Burger Name</th>
                <th>Restaurant Name</th>
                <th>Rating(Out of 5)</th>
            </tr>
        </thead>
        <tbody>
            <c:forEach var="b" items="${burgers}">
                <tr>
                    <td><c:out value="${b.burgerName}"/></td>
                    <td><c:out value="${b.restaurantName}"/></td>
                    <td><c:out value="${b.rating}"/></td>
                </tr>
            </c:forEach>
        </tbody>
    </table>
    <br>
    <h2>Add a Burger</h2>
    <form:form action="/burgers/new" method="post" modelAttribute="burger">
        <div>
            <form:label path="burgerName">Burger Name</form:label>
            <form:input path="burgerName"/>
            <form:errors path="burgerName"/>
        </div>
        <div>
            <form:label path="restaurantName">Restaurant Name</form:label>
            <form:textarea path="restaurantName"/>
            <form:errors path="restaurantName"/>
        </div>
        <div>
            <form:label path="rating">Rating</form:label>
            <form:input type="number" path="rating"/>
            <form:errors path="rating"/>
            
        </div>
        <div>
            <form:label path="notes">Notes</form:label>
            <form:input path="notes"/>
            <form:errors path="notes"/>
        </div>
        <input type="submit" value="Submit"/>
    </form:form>
</body>
</html>

