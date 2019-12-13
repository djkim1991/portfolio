package com.dongju.portfolio.domain.entity.portfolio.personalProject.survey;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Data
@Entity
@Table(name = "survey_question")
@Access(AccessType.FIELD)
@NoArgsConstructor
@AllArgsConstructor
public class SurveyQuestion implements Serializable {
    @Id
    @Column(name = "uid")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long uid;

    @Column(name = "title")
    private String title;

    @Column(name = "type")
    private String type;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "survey_uid", nullable = false)
    @ToString.Exclude
    private Survey survey;

    @OneToMany(mappedBy = "surveyQuestion")
    private List<SurveyAnswer> surveyAnswerList;
}
