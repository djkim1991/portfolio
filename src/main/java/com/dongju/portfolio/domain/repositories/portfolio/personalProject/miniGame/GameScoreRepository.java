package com.dongju.portfolio.domain.repositories.portfolio.personalProject.miniGame;

import com.dongju.portfolio.domain.entity.portfolio.personalProject.miniGame.GameScore;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GameScoreRepository extends JpaRepository<GameScore, Long> {
    public List<GameScore> findTop10ByOrderByScoreDesc();
}
