package spbstu.ponomarev.stepan.DecanatREST.controller;

import org.springframework.web.bind.annotation.*;
import spbstu.ponomarev.stepan.DecanatREST.domain.Mark;
import spbstu.ponomarev.stepan.DecanatREST.service.MarkService;

import java.util.List;

@RestController
@RequestMapping("mark")
public class MarkController {
  private final MarkService markService;

  public MarkController(MarkService markService) {
    this.markService = markService;
  }

  @GetMapping("all")
  public List<Mark> getMarks() {
    return markService.getAll();
  }

  @GetMapping("{id}")
  public List<Mark> getById(
      @PathVariable Long id
  ) {
    return markService.getBySubjectId(id);
  }

  @DeleteMapping
  public void deleteMark(@RequestBody Mark mark) {
    markService.deleteMark(mark);
  }

  @PostMapping
  public void addMark(@RequestBody Mark mark) {
    markService.addMark(mark);
  }
}
