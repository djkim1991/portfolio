package com.dongju.portfolio.domain.entity.portfolio.personalProject.survey;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@Table(name = "survey_answer")
@Access(AccessType.FIELD)
@NoArgsConstructor
@AllArgsConstructor
public class SurveyAnswer implements Serializable {
    @Id
    @Column(name = "uid")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long uid;

    @Column(name = "title")
    private String title;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "survey_question_uid")
    @ToString.Exclude
    private SurveyQuestion surveyQuestion;
}
