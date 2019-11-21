package com.dongju.portfolio.domain.entity.portfolio.personalProject.miniGame;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;

@Data
@Entity
@Table(name = "game_score")
@Access(AccessType.FIELD)
@AllArgsConstructor
@NoArgsConstructor
public class GameScore implements Serializable {
    @Id
    @Column(name = "uid")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long uid;

    @Column(name = "game_name")
    private String gameName;

    @Column(name = "nick_Name")
    private String nickName;

    @Column(name = "score")
    private Integer score;
}
