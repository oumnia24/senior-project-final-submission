from explorecourses import *
from explorecourses import filters
import json



# app = Flask(__name__)
connect = CourseConnection()
year = "2021-2022"
# @app.route('/courses')



course_list = []
for school in connect.get_schools(year):
    for dept in school.departments:
        courses = connect.get_courses_by_department(dept.code, year=year)
        for course in courses:
            course_list.append(str(course))


with open('courselist.json', 'w') as file:
    json.dump(course_list, file)
