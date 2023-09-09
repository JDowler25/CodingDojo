<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
        <!DOCTYPE html>
        <html>

        <head>
            <meta charset="UTF-8">
            <title>Fruity Loops</title>
        </head>

        <body>
            <h1>Fruit Store</h1>
            <table class="table">
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                    <c:forEach items="${fruits}" var="fruit">
                        <tr>
                            <td>${fruit.name}</td>
                            <td>${fruit.price}</td>
                        </tr>
                    </c:forEach>
                </tbody>
            </table>
        </body>

        </html>