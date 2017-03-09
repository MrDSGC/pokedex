class Api::PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all #why missing 26 pokes
  end

  def show
    @pokemon = Pokemon.find_by(id: params[:id])
  end
end
