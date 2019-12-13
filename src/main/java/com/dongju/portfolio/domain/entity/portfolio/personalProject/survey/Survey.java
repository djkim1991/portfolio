package com.dongju.portfolio.domain.entity.portfolio.personalProject.survey;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;

@Data
@Entity
@Table(name = "survey")
@Access(AccessType.FIELD)
@NoArgsConstructor
@AllArgsConstructor
public class Survey implements Serializable {
    @Id
    @Column(name = "uid")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long uid;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private Integer description;

    @OneToMany(mappedBy = "survey")
    private List<SurveyQuestion> surveyQuestionList;
}
