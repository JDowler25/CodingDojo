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
    <title>Tacos</title>
    <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/css/main.css"> <!-- change to match your file/naming structure -->
    <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
    <script type="text/javascript" src="/js/app.js"></script><!-- change to match your file/naming structure -->
</head>

<body>
    <h1>Safe Travels</h1>
    <table>
        <thead>
            <tr>
                <th>Expense</th>
                <th>Vendor</th>
                <th>Amount</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <c:forEach var="safeTravel" items="${safeTravels}">
                <tr>
                    <td>
                        <a href="/safetravels/${safeTravel.id}"><c:out value="${safeTravel.expense}" /></a>
                    </td>
                    <td>
                        <c:out value="${safeTravel.vendor}" />
                    </td>
                    <td>
                        <c:out value="${safeTravel.amount}" />
                    </td>
                    <td><a href="/safetravels/${safeTravel.id}/edit">edit</a>
                        <form action="/safetravels/${safeTravel.id}" method="post">
                            <input type="hidden" name="_method" value="delete">
                            <input type="submit" value="Delete">
                        </form>
                    </td>
                </tr>
            </c:forEach>
        </tbody>
    </table>
    <br>
    <h2>Add an Expense:</h2>
    <form:form action="/safetravels/new" method="post" modelAttribute="safeTravel">
        <div>
            <form:label path="expense">Expense</form:label>
            <form:input path="expense" />
            <form:errors path="expense" />
        </div>
        <div>
            <form:label path="vendor">Vendor</form:label>
            <form:textarea path="vendor" />
            <form:errors path="vendor" />
        </div>
        <div>
            <form:label path="amount">Amount</form:label>
            <form:input type="number" path="amount" />
            <form:errors path="amount" />

        </div>
        <div>
            <form:label path="description">Description</form:label>
            <form:input path="description" />
            <form:errors path="description" />
        </div>
        <input type="submit" value="Submit" />
    </form:form>
</body>

</html>