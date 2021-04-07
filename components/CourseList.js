import Course from './Course';
import termSelector from './termSelector';
import CourseSelector from './CourseSelector';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import TermSelector from './termSelector';
import { getCourseNumber, getCourseTerm, hasConflict, terms } from '../utils/course.js';


const termMap = {F: 'Fall', W: 'Winter', S: 'Spring'};



const CourseList = ({courses, view}) => {
    const [selectedTerm, setSelectedTerm] = useState('Fall');
    const termCourses = courses.filter(course => selectedTerm === getCourseTerm(course));
    return (
        <ScrollView>
            <TermSelector terms={terms} selectedTerm={selectedTerm} setSelectedTerm={setSelectedTerm} />
            <CourseSelector courses={termCourses} view={view}/>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
  courseList: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default CourseList;