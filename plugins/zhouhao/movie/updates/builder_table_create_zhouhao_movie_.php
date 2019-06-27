<?php namespace ZhouHao\Movie\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class BuilderTableCreateZhouhaoMovie extends Migration
{
    public function up()
    {
        Schema::create('zhouhao_movie_', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('name');
            $table->text('description')->nullable();
            $table->integer('year')->nullable();
        });
    }
    
    public function down()
    {
        Schema::dropIfExists('zhouhao_movie_');
    }
}
