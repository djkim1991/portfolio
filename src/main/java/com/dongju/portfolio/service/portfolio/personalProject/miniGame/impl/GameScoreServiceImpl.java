package com.dongju.portfolio.service.portfolio.personalProject.miniGame.impl;

import com.dongju.portfolio.domain.dto.portfolio.personalProject.miniGame.GameScoreDto;
import com.dongju.portfolio.domain.entity.portfolio.personalProject.miniGame.GameScore;
import com.dongju.portfolio.domain.repositories.portfolio.personalProject.miniGame.GameScoreRepository;
import com.dongju.portfolio.service.portfolio.personalProject.miniGame.GameScoreService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service("JpaGameScoreServiceImpl")
@Transactional
@RequiredArgsConstructor
@Slf4j
public class GameScoreServiceImpl implements GameScoreService {

    private final GameScoreRepository gameScoreRepository;
    private final ModelMapper modelMapper;

    @Override
    public List<GameScoreDto> list() {
        List<GameScoreDto> GameScoreDtoList = gameScoreRepository.findTop10ByOrderByScoreDesc()
                .stream()
                .map(gameScore -> modelMapper.map(gameScore, GameScoreDto.class))
                .collect(Collectors.toList());

        return GameScoreDtoList;
    }

    @Override
    public GameScoreDto findByUid(Long uid) {
        GameScore gameScore = gameScoreRepository.findById(uid).orElse(new GameScore());

        return modelMapper.map(gameScore, GameScoreDto.class);
    }

    @Override
    public Long count() {
        return gameScoreRepository.count();
    }

    @Override
    public void save(GameScoreDto gameScoreDto) {

        gameScoreRepository.save(modelMapper.map(gameScoreDto, GameScore.class));
    }

    @Override
    public void deleteByUid(Long uid) {
        gameScoreRepository.deleteById(uid);
    }

    @Override
    public void deleteOutOfRanking() {
        List<Long> gameScoreUidList = gameScoreRepository.findTop10ByOrderByScoreDesc()
                .stream()
                .map(gameScore -> gameScore.getUid())
                .collect(Collectors.toList());

        gameScoreRepository.deleteGameScoresByUidIsNotIn(gameScoreUidList);
    }
}
